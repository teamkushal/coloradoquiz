import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3516Component } from './test-component3516.component';

describe('TestComponent3516Component', () => {
  let component: TestComponent3516Component;
  let fixture: ComponentFixture<TestComponent3516Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3516Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
