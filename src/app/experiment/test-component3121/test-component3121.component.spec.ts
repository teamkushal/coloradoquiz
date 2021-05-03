import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3121Component } from './test-component3121.component';

describe('TestComponent3121Component', () => {
  let component: TestComponent3121Component;
  let fixture: ComponentFixture<TestComponent3121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3121Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
