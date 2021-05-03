import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent635Component } from './test-component635.component';

describe('TestComponent635Component', () => {
  let component: TestComponent635Component;
  let fixture: ComponentFixture<TestComponent635Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent635Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
