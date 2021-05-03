import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1519Component } from './test-component1519.component';

describe('TestComponent1519Component', () => {
  let component: TestComponent1519Component;
  let fixture: ComponentFixture<TestComponent1519Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1519Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
