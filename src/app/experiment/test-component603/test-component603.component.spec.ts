import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent603Component } from './test-component603.component';

describe('TestComponent603Component', () => {
  let component: TestComponent603Component;
  let fixture: ComponentFixture<TestComponent603Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent603Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
