import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent987Component } from './test-component987.component';

describe('TestComponent987Component', () => {
  let component: TestComponent987Component;
  let fixture: ComponentFixture<TestComponent987Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent987Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
