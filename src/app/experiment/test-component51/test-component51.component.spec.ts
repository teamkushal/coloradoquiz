import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent51Component } from './test-component51.component';

describe('TestComponent51Component', () => {
  let component: TestComponent51Component;
  let fixture: ComponentFixture<TestComponent51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent51Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
