import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2414Component } from './test-component2414.component';

describe('TestComponent2414Component', () => {
  let component: TestComponent2414Component;
  let fixture: ComponentFixture<TestComponent2414Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2414Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
