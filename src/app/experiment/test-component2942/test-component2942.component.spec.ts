import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2942Component } from './test-component2942.component';

describe('TestComponent2942Component', () => {
  let component: TestComponent2942Component;
  let fixture: ComponentFixture<TestComponent2942Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2942Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
