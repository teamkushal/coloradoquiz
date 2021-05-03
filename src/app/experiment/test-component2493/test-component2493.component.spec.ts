import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2493Component } from './test-component2493.component';

describe('TestComponent2493Component', () => {
  let component: TestComponent2493Component;
  let fixture: ComponentFixture<TestComponent2493Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2493Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
