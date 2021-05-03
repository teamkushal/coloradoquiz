import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent519Component } from './test-component519.component';

describe('TestComponent519Component', () => {
  let component: TestComponent519Component;
  let fixture: ComponentFixture<TestComponent519Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent519Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
