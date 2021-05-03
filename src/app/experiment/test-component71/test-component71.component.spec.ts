import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent71Component } from './test-component71.component';

describe('TestComponent71Component', () => {
  let component: TestComponent71Component;
  let fixture: ComponentFixture<TestComponent71Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent71Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
