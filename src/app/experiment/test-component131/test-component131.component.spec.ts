import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent131Component } from './test-component131.component';

describe('TestComponent131Component', () => {
  let component: TestComponent131Component;
  let fixture: ComponentFixture<TestComponent131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent131Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
