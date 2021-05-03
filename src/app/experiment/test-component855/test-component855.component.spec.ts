import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent855Component } from './test-component855.component';

describe('TestComponent855Component', () => {
  let component: TestComponent855Component;
  let fixture: ComponentFixture<TestComponent855Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent855Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
