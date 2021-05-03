import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3153Component } from './test-component3153.component';

describe('TestComponent3153Component', () => {
  let component: TestComponent3153Component;
  let fixture: ComponentFixture<TestComponent3153Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3153Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
