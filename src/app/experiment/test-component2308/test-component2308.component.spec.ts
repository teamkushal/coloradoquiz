import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2308Component } from './test-component2308.component';

describe('TestComponent2308Component', () => {
  let component: TestComponent2308Component;
  let fixture: ComponentFixture<TestComponent2308Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2308Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
