import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent451Component } from './test-component451.component';

describe('TestComponent451Component', () => {
  let component: TestComponent451Component;
  let fixture: ComponentFixture<TestComponent451Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent451Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
