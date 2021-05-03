import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2721Component } from './test-component2721.component';

describe('TestComponent2721Component', () => {
  let component: TestComponent2721Component;
  let fixture: ComponentFixture<TestComponent2721Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2721Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
