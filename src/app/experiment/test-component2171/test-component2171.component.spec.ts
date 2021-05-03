import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2171Component } from './test-component2171.component';

describe('TestComponent2171Component', () => {
  let component: TestComponent2171Component;
  let fixture: ComponentFixture<TestComponent2171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2171Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
