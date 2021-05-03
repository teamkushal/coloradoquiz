import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3538Component } from './test-component3538.component';

describe('TestComponent3538Component', () => {
  let component: TestComponent3538Component;
  let fixture: ComponentFixture<TestComponent3538Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3538Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
