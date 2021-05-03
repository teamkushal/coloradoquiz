import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2421Component } from './test-component2421.component';

describe('TestComponent2421Component', () => {
  let component: TestComponent2421Component;
  let fixture: ComponentFixture<TestComponent2421Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2421Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
