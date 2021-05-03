import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2068Component } from './test-component2068.component';

describe('TestComponent2068Component', () => {
  let component: TestComponent2068Component;
  let fixture: ComponentFixture<TestComponent2068Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2068Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
