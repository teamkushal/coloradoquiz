import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent469Component } from './test-component469.component';

describe('TestComponent469Component', () => {
  let component: TestComponent469Component;
  let fixture: ComponentFixture<TestComponent469Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent469Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
