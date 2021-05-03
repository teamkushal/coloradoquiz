import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent206Component } from './test-component206.component';

describe('TestComponent206Component', () => {
  let component: TestComponent206Component;
  let fixture: ComponentFixture<TestComponent206Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent206Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
