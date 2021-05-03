import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent4000Component } from './test-component4000.component';

describe('TestComponent4000Component', () => {
  let component: TestComponent4000Component;
  let fixture: ComponentFixture<TestComponent4000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent4000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent4000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
