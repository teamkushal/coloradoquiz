import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2738Component } from './test-component2738.component';

describe('TestComponent2738Component', () => {
  let component: TestComponent2738Component;
  let fixture: ComponentFixture<TestComponent2738Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2738Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
