import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2528Component } from './test-component2528.component';

describe('TestComponent2528Component', () => {
  let component: TestComponent2528Component;
  let fixture: ComponentFixture<TestComponent2528Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2528Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
