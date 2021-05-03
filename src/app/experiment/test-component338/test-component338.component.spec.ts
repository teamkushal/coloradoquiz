import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent338Component } from './test-component338.component';

describe('TestComponent338Component', () => {
  let component: TestComponent338Component;
  let fixture: ComponentFixture<TestComponent338Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent338Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
