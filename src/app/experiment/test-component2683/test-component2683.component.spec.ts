import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2683Component } from './test-component2683.component';

describe('TestComponent2683Component', () => {
  let component: TestComponent2683Component;
  let fixture: ComponentFixture<TestComponent2683Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2683Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
