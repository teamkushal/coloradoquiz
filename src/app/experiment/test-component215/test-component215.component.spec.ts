import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent215Component } from './test-component215.component';

describe('TestComponent215Component', () => {
  let component: TestComponent215Component;
  let fixture: ComponentFixture<TestComponent215Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent215Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
