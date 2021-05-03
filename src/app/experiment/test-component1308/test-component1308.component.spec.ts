import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1308Component } from './test-component1308.component';

describe('TestComponent1308Component', () => {
  let component: TestComponent1308Component;
  let fixture: ComponentFixture<TestComponent1308Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1308Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
