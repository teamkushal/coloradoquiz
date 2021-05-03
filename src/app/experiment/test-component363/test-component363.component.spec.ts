import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent363Component } from './test-component363.component';

describe('TestComponent363Component', () => {
  let component: TestComponent363Component;
  let fixture: ComponentFixture<TestComponent363Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent363Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
