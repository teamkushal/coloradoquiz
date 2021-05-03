import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3070Component } from './test-component3070.component';

describe('TestComponent3070Component', () => {
  let component: TestComponent3070Component;
  let fixture: ComponentFixture<TestComponent3070Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3070Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
