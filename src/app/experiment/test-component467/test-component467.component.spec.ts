import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent467Component } from './test-component467.component';

describe('TestComponent467Component', () => {
  let component: TestComponent467Component;
  let fixture: ComponentFixture<TestComponent467Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent467Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
