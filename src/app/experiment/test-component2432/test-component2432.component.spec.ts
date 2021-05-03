import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2432Component } from './test-component2432.component';

describe('TestComponent2432Component', () => {
  let component: TestComponent2432Component;
  let fixture: ComponentFixture<TestComponent2432Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2432Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
