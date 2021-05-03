import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2557Component } from './test-component2557.component';

describe('TestComponent2557Component', () => {
  let component: TestComponent2557Component;
  let fixture: ComponentFixture<TestComponent2557Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2557Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
