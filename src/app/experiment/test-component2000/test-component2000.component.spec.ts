import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2000Component } from './test-component2000.component';

describe('TestComponent2000Component', () => {
  let component: TestComponent2000Component;
  let fixture: ComponentFixture<TestComponent2000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
