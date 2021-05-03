import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3739Component } from './test-component3739.component';

describe('TestComponent3739Component', () => {
  let component: TestComponent3739Component;
  let fixture: ComponentFixture<TestComponent3739Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3739Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
