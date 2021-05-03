import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2922Component } from './test-component2922.component';

describe('TestComponent2922Component', () => {
  let component: TestComponent2922Component;
  let fixture: ComponentFixture<TestComponent2922Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2922Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
