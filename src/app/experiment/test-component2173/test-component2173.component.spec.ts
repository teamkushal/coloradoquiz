import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2173Component } from './test-component2173.component';

describe('TestComponent2173Component', () => {
  let component: TestComponent2173Component;
  let fixture: ComponentFixture<TestComponent2173Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2173Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
