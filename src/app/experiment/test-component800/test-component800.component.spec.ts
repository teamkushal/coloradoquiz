import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent800Component } from './test-component800.component';

describe('TestComponent800Component', () => {
  let component: TestComponent800Component;
  let fixture: ComponentFixture<TestComponent800Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent800Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
