import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2008Component } from './test-component2008.component';

describe('TestComponent2008Component', () => {
  let component: TestComponent2008Component;
  let fixture: ComponentFixture<TestComponent2008Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2008Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
