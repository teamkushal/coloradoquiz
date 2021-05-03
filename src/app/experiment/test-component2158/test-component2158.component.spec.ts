import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2158Component } from './test-component2158.component';

describe('TestComponent2158Component', () => {
  let component: TestComponent2158Component;
  let fixture: ComponentFixture<TestComponent2158Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2158Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
