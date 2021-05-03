import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent795Component } from './test-component795.component';

describe('TestComponent795Component', () => {
  let component: TestComponent795Component;
  let fixture: ComponentFixture<TestComponent795Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent795Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
