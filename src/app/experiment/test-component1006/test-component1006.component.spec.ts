import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1006Component } from './test-component1006.component';

describe('TestComponent1006Component', () => {
  let component: TestComponent1006Component;
  let fixture: ComponentFixture<TestComponent1006Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1006Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
