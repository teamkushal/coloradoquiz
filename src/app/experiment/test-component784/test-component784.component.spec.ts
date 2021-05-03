import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent784Component } from './test-component784.component';

describe('TestComponent784Component', () => {
  let component: TestComponent784Component;
  let fixture: ComponentFixture<TestComponent784Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent784Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
