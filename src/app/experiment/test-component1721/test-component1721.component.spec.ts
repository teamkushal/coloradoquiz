import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1721Component } from './test-component1721.component';

describe('TestComponent1721Component', () => {
  let component: TestComponent1721Component;
  let fixture: ComponentFixture<TestComponent1721Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1721Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
