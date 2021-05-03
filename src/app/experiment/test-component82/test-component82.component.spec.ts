import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent82Component } from './test-component82.component';

describe('TestComponent82Component', () => {
  let component: TestComponent82Component;
  let fixture: ComponentFixture<TestComponent82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent82Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
