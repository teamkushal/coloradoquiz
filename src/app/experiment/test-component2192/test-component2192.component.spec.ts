import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2192Component } from './test-component2192.component';

describe('TestComponent2192Component', () => {
  let component: TestComponent2192Component;
  let fixture: ComponentFixture<TestComponent2192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
