import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent515Component } from './test-component515.component';

describe('TestComponent515Component', () => {
  let component: TestComponent515Component;
  let fixture: ComponentFixture<TestComponent515Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent515Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
