import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent643Component } from './test-component643.component';

describe('TestComponent643Component', () => {
  let component: TestComponent643Component;
  let fixture: ComponentFixture<TestComponent643Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent643Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
