import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2257Component } from './test-component2257.component';

describe('TestComponent2257Component', () => {
  let component: TestComponent2257Component;
  let fixture: ComponentFixture<TestComponent2257Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2257Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
